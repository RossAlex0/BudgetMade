export interface ToolsInput {
  value: string | undefined;
  placeholder: string;
  keyType: "done" | "go" | "next" | "search" | "send";
  keyboardType?: "numeric" | "email-address";
  secure: boolean;
  setIsFocuse?: (value: boolean) => void;
  setOnChange: (value: any) => void;
  style: object;
  icon?: object;
}

export interface Tools {
  tools: ToolsInput;
}
