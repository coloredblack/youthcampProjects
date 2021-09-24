import { NodeType } from './ast';

export function baseParse(content: string) {
  const context = createParseContext(content);
  return createRoot(parseChildren(context));
}

function createParseContext(content) {
  console.log("Creating Parse Context");
  return {
    source: content;
  };
}
