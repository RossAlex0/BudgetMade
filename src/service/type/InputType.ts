export interface ToolsInput {
  value: string;
  placeholder: string;
  keyType: "done" | "go" | "next" | "search" | "send";
  secure: boolean;
  setIsFocuse: (value: boolean) => void;
  setOnChange: (value: string) => void;
  style: object;
}

export interface Tools {
  tools: ToolsInput;
}
