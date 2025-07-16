interface TerminalOutputProps {
  content: string;
}

export const TerminalOutput = ({ content }: TerminalOutputProps) => {
  // Handle special ANSI codes for clear screen
  if (content === '\x1b[2J\x1b[H') {
    return null;
  }

  return (
    <pre className="text-terminal-text whitespace-pre-wrap font-mono text-sm leading-relaxed animate-fade-in-up">
      {content}
    </pre>
  );
};