import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [serviceType, setServiceType] = useState<string>('');
  const [distance, setDistance] = useState<string>('');
  const [urgency, setUrgency] = useState<string>('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    if (!serviceType || !distance || !urgency) return;

    let basePrice = 0;
    
    switch (serviceType) {
      case 'welding':
        basePrice = 3000;
        break;
      case 'search':
        basePrice = 5000;
        break;
      case 'reflectogram':
        basePrice = 2500;
        break;
      case 'installation':
        basePrice = 8000;
        break;
      default:
        basePrice = 0;
    }

    const distanceKm = parseInt(distance) || 0;
    const distancePrice = distanceKm * 50;

    const urgencyMultiplier = urgency === 'urgent' ? 1.5 : urgency === 'scheduled' ? 1 : 1.2;

    const total = (basePrice + distancePrice) * urgencyMultiplier;
    setCalculatedPrice(Math.round(total));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Cable" className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">ИСТИС</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('equipment')} className="text-sm font-medium hover:text-primary transition-colors">
                Оборудование
              </button>
              <button onClick={() => scrollToSection('calculator')} className="text-sm font-medium hover:text-primary transition-colors">
                Калькулятор
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                О компании
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

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

      <section id="calculator" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Калькулятор стоимости</h2>
          <p className="text-center text-muted-foreground mb-12">
            Рассчитайте приблизительную стоимость услуг
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Параметры заказа</CardTitle>
              <CardDescription>Выберите тип услуги и укажите параметры</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="service">Тип услуги</Label>
                <Select value={serviceType} onValueChange={setServiceType}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="welding">Сварка муфт</SelectItem>
                    <SelectItem value="search">Поиск и устранение обрывов</SelectItem>
                    <SelectItem value="reflectogram">Снятие рефлектограмм</SelectItem>
                    <SelectItem value="installation">Монтаж ВОЛС</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="distance">Расстояние до объекта (км)</Label>
                <Input
                  id="distance"
                  type="number"
                  placeholder="Введите расстояние"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  min="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="urgency">Срочность выполнения</Label>
                <Select value={urgency} onValueChange={setUrgency}>
                  <SelectTrigger id="urgency">
                    <SelectValue placeholder="Выберите срок" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scheduled">Плановая (3-5 дней)</SelectItem>
                    <SelectItem value="standard">Стандартная (1-2 дня)</SelectItem>
                    <SelectItem value="urgent">Срочная (24 часа)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={calculatePrice} className="w-full" size="lg">
                <Icon name="Calculator" className="mr-2 h-5 w-5" />
                Рассчитать стоимость
              </Button>

              {calculatedPrice !== null && (
                <div className="mt-6 p-6 bg-primary/10 rounded-lg border-2 border-primary animate-fade-in">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Ориентировочная стоимость</p>
                    <p className="text-4xl font-bold text-primary">{calculatedPrice.toLocaleString()} ₽</p>
                    <p className="text-xs text-muted-foreground mt-4">
                      * Точная стоимость рассчитывается после осмотра объекта
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
