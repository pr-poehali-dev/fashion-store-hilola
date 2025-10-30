import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  category: string;
}

export default function ProductCard({ name, price, image, category }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden mb-4">
        <img 
          src={image}
          alt={name}
          className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-white px-3 py-1 text-xs tracking-wider">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="bg-white text-primary hover:bg-white/90 px-6 py-2 text-sm tracking-wider">
            ПОДРОБНЕЕ
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-heading font-light text-primary">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-light text-accent">
            {price}
          </p>
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <Icon name="Heart" size={20} className="text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}
