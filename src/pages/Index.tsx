import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-warm-beige to-light-beige py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-dark-brown leading-tight">
              Обретите гармонию с помощью 
              <span className="text-accent-orange"> профессиональной</span> поддержки
            </h1>
            <p className="text-xl text-medium-brown leading-relaxed">
              Интегративный подход, транзактный анализ и перинатальная психология — 
              все для вашего психологического благополучия
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent-orange hover:bg-primary text-white px-8 py-3 text-lg">
                Записаться на консультацию
              </Button>
              <Button variant="outline" size="lg" className="border-dark-brown text-dark-brown hover:bg-muted px-8 py-3 text-lg">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src="/img/81accc64-5510-4f4f-adb5-5d74e1875b53.jpg" 
                alt="Психолог"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-brown mb-4">
              Мои специализации
            </h2>
            <p className="text-xl text-medium-brown max-w-2xl mx-auto">
              Комплексный подход к решению жизненных задач через проверенные методы психотерапии
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-light-beige to-warm-beige border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mb-4">
                  <Icon name="Brain" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-dark-brown">Интегративный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-medium-brown text-center leading-relaxed">
                  Сочетание различных психотерапевтических методов для максимально эффективного решения ваших задач
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-light-beige to-warm-beige border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-dark-brown">Транзактный анализ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-medium-brown text-center leading-relaxed">
                  Понимание и изменение паттернов взаимодействия с окружающими для улучшения отношений
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-light-beige to-warm-beige border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-dark-brown">Перинатальная психология</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-medium-brown text-center leading-relaxed">
                  Поддержка во время беременности, родов и раннего родительства для благополучия семьи
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted to-light-beige">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-brown mb-4">
              Тарифы и услуги
            </h2>
            <p className="text-xl text-medium-brown max-w-2xl mx-auto">
              Выберите подходящий формат работы для решения ваших задач
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="bg-white border-2 border-warm-beige shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-dark-brown mb-2">Индивидуальная консультация</CardTitle>
                <div className="text-4xl font-bold text-accent-orange mb-4">5 000 ₽</div>
                <CardDescription className="text-medium-brown">Разовая встреча • 60 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-accent-orange" />
                    <span className="text-dark-brown">Первичная диагностика</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-accent-orange" />
                    <span className="text-dark-brown">Постановка целей работы</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-accent-orange" />
                    <span className="text-dark-brown">Рекомендации и план</span>
                  </li>
                </ul>
                <Button className="w-full bg-accent-orange hover:bg-primary text-white mt-6">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-white border-2 border-accent-orange shadow-xl hover:shadow-2xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-orange text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Популярный
                </span>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl text-dark-brown mb-2">Курс терапии</CardTitle>
                <div className="text-4xl font-bold text-accent-orange mb-4">18 000 ₽</div>
                <CardDescription className="text-medium-brown">5 сессий • Экономия 7 000 ₽</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-accent-orange" />
                    <span className="text-dark-brown">Комплексная работа</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-accent-orange" />
                    <span className="text-dark-brown">Поддержка между сессиями</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-accent-orange" />
                    <span className="text-dark-brown">Материалы для работы</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-accent-orange" />
                    <span className="text-dark-brown">Гибкое расписание</span>
                  </li>
                </ul>
                <Button className="w-full bg-accent-orange hover:bg-primary text-white mt-6">
                  Выбрать курс
                </Button>
              </CardContent>
            </Card>

            {/* VIP Plan */}
            <Card className="bg-white border-2 border-dark-blue shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-dark-brown mb-2">Семейная терапия</CardTitle>
                <div className="text-4xl font-bold text-accent-orange mb-4">7 000 ₽</div>
                <CardDescription className="text-medium-brown">Парная сессия • 90 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-accent-orange" />
                    <span className="text-dark-brown">Работа с парой/семьей</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-accent-orange" />
                    <span className="text-dark-brown">Расширенное время</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-accent-orange" />
                    <span className="text-dark-brown">Техники для отношений</span>
                  </li>
                </ul>
                <Button className="w-full bg-dark-blue hover:bg-accent text-white mt-6">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-blue text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Анна Психолог</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Профессиональная психологическая помощь с индивидуальным подходом к каждому клиенту. 
                Более 8 лет опыта в области психотерапии.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-400 text-gray-300 hover:bg-white hover:text-dark-blue">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Позвонить
                </Button>
                <Button variant="outline" size="sm" className="border-gray-400 text-gray-300 hover:bg-white hover:text-dark-blue">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Написать
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={16} />
                  <span>anna@psychologist.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={16} />
                  <span>г. Москва, ул. Примерная, 1</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-gray-300">
                <div>Пн-Пт: 9:00 - 20:00</div>
                <div>Сб: 10:00 - 18:00</div>
                <div>Вс: выходной</div>
                <div className="pt-2">
                  <span className="text-accent-orange">Онлайн консультации</span>
                </div>
                <div>Ежедневно: 8:00 - 22:00</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Анна Психолог. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;