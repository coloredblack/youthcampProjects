const c2eMap = {
  你好: "hello",
  "调用 patch": "call patch function"
};

const e2cMap = {
  hello: "你好",
};

export default class LanguageTranslator {
  private currentLanguage: string;
  constructor() {
    this.currentLanguage = process.env.LANGUAGE || 'cn';
  }
}