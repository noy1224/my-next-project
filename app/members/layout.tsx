import Sheets from "@/app/_components/sheet";

type Props = {
    children: React.ReactNode;
  };
  
  export default function RootLayout({ children }: Props) {
    return <sheet>{children}</sheet>;
  }