import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          ООО "ИСТИС"
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Профессиональное обслуживание волоконно-оптических линий связи
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 bg-card p-4 rounded-lg shadow-sm">
            <Icon name="CheckCircle2" className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Опыт работы 10+ лет</span>
          </div>
          <div className="flex items-center space-x-2 bg-card p-4 rounded-lg shadow-sm">
            <Icon name="Clock" className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Работаем 24/7</span>
          </div>
          <div className="flex items-center space-x-2 bg-card p-4 rounded-lg shadow-sm">
            <Icon name="Award" className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Сертифицированные специалисты</span>
          </div>
        </div>
        <Button onClick={() => scrollToSection('calculator')} size="lg" className="text-lg">
          Рассчитать стоимость
          <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;