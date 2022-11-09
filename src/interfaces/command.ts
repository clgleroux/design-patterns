export interface command {
  execute(): void;
}

export interface commandData {
  execute(data): void;
}