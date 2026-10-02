import { marked } from 'marked';
export const md = (s?: string) => (s ? (marked.parse(s, { async: false }) as string) : '');
