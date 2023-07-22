import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

const DashboardPage = () => {
  return (
    <>
      <p className="text-xl text-red-500">Abhishek (Protected)</p>
      <Button variant="secondary">Abhishek</Button>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default DashboardPage;
