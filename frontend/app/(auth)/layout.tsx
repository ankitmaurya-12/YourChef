export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center pt-40 pb-25">
      {children}
    </div>
  );
}