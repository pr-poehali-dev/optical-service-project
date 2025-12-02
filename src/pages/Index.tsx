import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PriceCalculator from '@/components/PriceCalculator';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header scrollToSection={scrollToSection} />

      <HeroSection scrollToSection={scrollToSection} />

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow animate-slide-up">
              <CardHeader>
                <Icon name="Zap" className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Сварка муфт</CardTitle>
                <CardDescription>Сварка различных типов муфт ВОЛС</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Оптические муфты</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Кроссовое оборудование</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Соединительные боксы</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <Icon name="Search" className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Поиск обрывов</CardTitle>
                <CardDescription>Диагностика и устранение повреждений</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Локализация обрывов</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Устранение повреждений</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Экстренный выезд</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <Icon name="LineChart" className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Рефлектометрия</CardTitle>
                <CardDescription>Измерение параметров линии</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Снятие рефлектограмм</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Анализ параметров</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Подготовка отчётов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <Icon name="Wrench" className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Монтаж ВОЛС</CardTitle>
                <CardDescription>Установка и настройка оборудования</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Прокладка кабеля</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Монтаж кроссов</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Пусконаладка</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Используемое оборудование</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Cpu" className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>Сварочные аппараты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Профессиональное оборудование для сварки оптоволокна с минимальными потерями
                </p>
                <Separator className="my-4" />
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-center">
                    <Icon name="Dot" className="h-4 w-4 text-primary mr-2" />
                    Fujikura FSM-80S
                  </li>
                  <li className="flex items-center">
                    <Icon name="Dot" className="h-4 w-4 text-primary mr-2" />
                    INNO View 7
                  </li>
                  <li className="flex items-center">
                    <Icon name="Dot" className="h-4 w-4 text-primary mr-2" />
                    Sumitomo Z2C
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Activity" className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>Рефлектометры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Современные OTDR для точной диагностики и измерения параметров линий
                </p>
                <Separator className="my-4" />
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-center">
                    <Icon name="Dot" className="h-4 w-4 text-primary mr-2" />
                    EXFO FTB-1
                  </li>
                  <li className="flex items-center">
                    <Icon name="Dot" className="h-4 w-4 text-primary mr-2" />
                    Yokogawa AQ1200
                  </li>
                  <li className="flex items-center">
                    <Icon name="Dot" className="h-4 w-4 text-primary mr-2" />
                    VIAVI MTS-8000
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Gauge" className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>Измерители мощности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Точные приборы для контроля оптической мощности и затухания
                </p>
                <Separator className="my-4" />
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-center">
                    <Icon name="Dot" className="h-4 w-4 text-primary mr-2" />
                    EXFO FPM-600
                  </li>
                  <li className="flex items-center">
                    <Icon name="Dot" className="h-4 w-4 text-primary mr-2" />
                    Kingfisher KI2400
                  </li>
                  <li className="flex items-center">
                    <Icon name="Dot" className="h-4 w-4 text-primary mr-2" />
                    AFL FlexTester
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <PriceCalculator />

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">О компании</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ООО "ИСТИС" — профессиональная компания, специализирующаяся на обслуживании и монтаже волоконно-оптических линий связи. 
                  Мы предоставляем полный комплекс услуг по работе с ВОЛС, начиная от прокладки кабеля и заканчивая сложной диагностикой и устранением повреждений.
                </p>
                
                <Separator />
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">10+</div>
                    <p className="text-sm text-muted-foreground">лет на рынке</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <p className="text-sm text-muted-foreground">выполненных проектов</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <p className="text-sm text-muted-foreground">постоянных клиентов</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Наши преимущества:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <span className="text-muted-foreground">Сертифицированные специалисты с большим опытом работы</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <span className="text-muted-foreground">Современное профессиональное оборудование ведущих мировых производителей</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <span className="text-muted-foreground">Круглосуточная служба экстренного реагирования</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <span className="text-muted-foreground">Полный пакет отчётной документации по выполненным работам</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <span className="text-muted-foreground">Гарантия на все виды выполненных работ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>Мы готовы ответить на все ваши вопросы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-sm text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                    <p className="text-xs text-muted-foreground mt-1">Круглосуточно</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">info@istis.ru</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-sm text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">График работы</p>
                    <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-sm text-muted-foreground">Аварийная служба: 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Введите имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Input id="message" placeholder="Опишите вашу задачу" />
                </div>
                <Button className="w-full">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
