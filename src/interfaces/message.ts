export interface message {
  subject: string;
  object: string;
  sendMessage(): message;
}
