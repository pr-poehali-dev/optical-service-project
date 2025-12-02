import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const PriceCalculator = () => {
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

  return (
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
  );
};

export default PriceCalculator;
