import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#hero" className="text-3xl font-heading font-light tracking-wider text-primary">
              KHILOLA
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-sm tracking-wide hover:text-accent transition-colors">
                О БРЕНДЕ
              </a>
              <a href="#contact" className="text-sm tracking-wide hover:text-accent transition-colors">
                КОНТАКТЫ
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-heading font-light text-primary leading-tight">
                Элегантность в каждой детали
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Откройте для себя коллекцию премиальной одежды и обуви, созданную для тех, 
                кто ценит утончённый стиль и безупречное качество.
              </p>
              <Button 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-sm tracking-wider"
              >
                ИССЛЕДОВАТЬ КОЛЛЕКЦИЮ
              </Button>
            </div>
            <div className="animate-fade-in-up">
              <img 
                src="https://cdn.poehali.dev/projects/c42e08c3-b245-4124-8089-5fcb1c8d0528/files/3f7c9012-6f9a-4d28-b81c-4ffc8e5de433.jpg"
                alt="Khilola Collection"
                className="w-full h-[600px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <Icon name="Sparkles" size={40} className="mx-auto text-accent" />
              <h3 className="text-2xl font-heading">Эксклюзивность</h3>
              <p className="text-muted-foreground font-light">
                Каждая вещь создана с вниманием к деталям и любовью к совершенству
              </p>
            </div>
            <div className="space-y-4">
              <Icon name="Award" size={40} className="mx-auto text-accent" />
              <h3 className="text-2xl font-heading">Премиум качество</h3>
              <p className="text-muted-foreground font-light">
                Только лучшие материалы и безупречное исполнение
              </p>
            </div>
            <div className="space-y-4">
              <Icon name="Heart" size={40} className="mx-auto text-accent" />
              <h3 className="text-2xl font-heading">Индивидуальность</h3>
              <p className="text-muted-foreground font-light">
                Создайте свой неповторимый образ с нашими коллекциями
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/c42e08c3-b245-4124-8089-5fcb1c8d0528/files/5aa85916-0878-46fa-b10d-8ef3baea6fcd.jpg"
                alt="О бренде Khilola"
                className="w-full h-[500px] object-cover shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-heading font-light text-primary">
                О бренде Khilola
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Khilola — это история о страсти к совершенству и стремлении к гармонии. 
                Мы создаём не просто одежду и обувь, мы создаём произведения искусства, 
                которые подчёркивают вашу индивидуальность.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Каждая коллекция рождается из вдохновения природой, архитектурой и культурой. 
                Мы верим, что истинная элегантность заключается в деталях, а роскошь — 
                в качестве и комфорте.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Наша философия проста: создавать вещи, которые будут служить вам долгие годы, 
                оставаясь актуальными и любимыми.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-light text-primary mb-4">
              Наши коллекции
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Откройте для себя мир элегантности и стиля
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/c42e08c3-b245-4124-8089-5fcb1c8d0528/files/ef15318a-30cf-4716-bac7-280747b00fca.jpg"
                alt="Коллекция обуви"
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-4xl font-heading text-white">ОБУВЬ</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/c42e08c3-b245-4124-8089-5fcb1c8d0528/files/3f7c9012-6f9a-4d28-b81c-4ffc8e5de433.jpg"
                alt="Коллекция одежды"
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-4xl font-heading text-white">ОДЕЖДА</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-secondary">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-heading font-light text-primary mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Мы всегда рады помочь вам подобрать идеальный образ
            </p>
          </div>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-center space-x-4">
              <Icon name="MapPin" size={24} className="text-accent" />
              <p className="text-lg">Москва, ул. Тверская, 1</p>
            </div>
            <div className="flex items-center space-x-4">
              <Icon name="Phone" size={24} className="text-accent" />
              <p className="text-lg">+7 (495) 123-45-67</p>
            </div>
            <div className="flex items-center space-x-4">
              <Icon name="Mail" size={24} className="text-accent" />
              <p className="text-lg">info@khilola.com</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 shadow-lg">
            <div>
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="border-border bg-background"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="border-border bg-background"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Ваше сообщение"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="border-border bg-background min-h-[150px]"
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-sm tracking-wider"
            >
              ОТПРАВИТЬ СООБЩЕНИЕ
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-3xl font-heading font-light tracking-wider mb-4 md:mb-0">
              KHILOLA
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm opacity-70">
            © 2024 Khilola. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
