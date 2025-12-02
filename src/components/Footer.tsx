import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Icon name="Cable" className="h-6 w-6" />
            <span className="font-bold">ООО "ИСТИС"</span>
          </div>
          <p className="text-sm text-secondary-foreground/80">
            © 2024 ИСТИС. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
