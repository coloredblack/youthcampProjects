import { NodeType } from './ast';

export function baseParse(content: string) {
  const context = createParseContext(content);
  return createRoot(parseChildren(context));
}

function createParseContext(content) {
  console.log("Creating Parse Context");
  return {
    source: content
  };
}

function createRoot(children) {
  return {
    type: NodeType.ROOT,
    children,
  };
}

function parseChildren(context) {
  console.log("start to parse children");
  const nodes: any = [];
  const s = context.source;

  let node;
  if (startsWith(s, "{{")) {
    node = parseInterpolation(context);
  }

  if (!node) {
    node = parseText(context);
  }
  nodes.push(node);
  return nodes;
}

function parseText(context): any {
  console.log("is parsing text", context);
  const endIndex = context.source.length;
  const content = parseTextData(context, endIndex);
}

function parseTextData(context: any, length: number): any {
  console.log("parsing textData");
  const rawText = context.source.slice(0, length);
  advancedBy(context, length);
  return rawText;
}

function advancedBy(context: any, numOfCharacter: number):void {
  console.log("is pushing code ", context, numOfCharacter);
  context.source = context.source.slice(numOfCharacter);
}

function parseInterpolation(context) {
  // get final index 
  // get length using final - start
  // slice the length
}

function startsWith(source: string, searchString: string): boolean {
  return source.startsWith(searchString);
}