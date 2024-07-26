export type MainLayoutProps = {
  content: string;
  title: string;
};

export function MainLayout({ content, title }: MainLayoutProps) {
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>{content}</body>
    </html>
  );
}

export const render = MainLayout;
