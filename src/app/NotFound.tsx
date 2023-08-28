function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const NotFound = ({ className }: { className?: string }) => (
  <div
    className={classNames(`absolute inset-0 flex z-10 items-center justify-center max-w-5xl h-screen px-6 mx-auto font-mono text-lg prose md:flex-row dark:prose-invert`, className)}
  >
    Not found ¯\_(ツ)_/¯
  </div>
);

export default NotFound;
