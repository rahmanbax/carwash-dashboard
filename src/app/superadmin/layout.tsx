import MainLayout from "@/components/MainLayout";

export default function SuperadminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
