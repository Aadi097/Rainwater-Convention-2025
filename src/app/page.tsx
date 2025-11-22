
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  CalendarDays,
  Clock,
  MapPin,
  Droplets,
  Leaf,
  Recycle,
  ChevronRight,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
const speakers = [
  {
    id: 'speaker-1',
    name: 'Dr. Elena Vance',
    title: 'Hydrologist & Author',
  },
  {
    id: 'speaker-2',
    name: 'Marcus Thorne',
    title: 'Urban Planning Innovator',
  },
  {
    id: 'speaker-3',
    name: 'Jian Li',
    title: 'Agricultural Scientist',
  },
  {
    id: 'speaker-4',
    name: 'Sofia Reyes',
    title: 'Community Organizer',
  },
];

const infoCards = [
  {
    icon: <Droplets className="w-8 h-8 text-primary" />,
    title: 'Conserve Water',
    description: 'Learn how rainwater harvesting can reduce your dependency on municipal water sources.',
  },
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    title: 'Nourish Your Garden',
    description: 'Discover the benefits of using naturally soft and chemical-free rainwater for your plants.',
  },
  {
    icon: <Recycle className="w-8 h-8 text-primary" />,
    title: 'Sustainable Future',
    description: 'Understand the role of water conservation in building resilient and eco-friendly communities.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] text-primary-foreground">
        <div className="absolute inset-0 bg-primary/70 z-10" />
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-shadow-md">
            Rainwater Convention
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-primary-foreground/90 mb-8">
            Join experts, innovators, and enthusiasts from around the globe to explore the future of water sustainability. Save Water. Sustain Life.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/register">
              Register Now <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Event Details Bar */}
      <section className="bg-primary -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="shadow-lg -translate-y-1/2 border-2 border-border">
            <CardContent className="p-6">
              <div className="flex justify-between items-center text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <CalendarDays className="w-10 h-10 text-accent" />
                  <div>
                    <p className="font-semibold text-lg">October 22-24, 2025</p>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-center gap-4">
                  <Clock className="w-10 h-10 text-accent" />
                  <div>
                    <p className="font-semibold text-lg">9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end gap-4">
                  <MapPin className="w-10 h-10 text-accent" />
                  <div>
                    <p className="font-semibold text-lg">International Convention City Bashundhara</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Speakers Section */}
        <section className="py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Featured Speakers
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from leading voices in water conservation, sustainable agriculture, and policy-making.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker) => {
              const speakerImage = PlaceHolderImages.find((img) => img.id === speaker.id);
              return (
                <Card key={speaker.name} className="text-center overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="p-0">
                    <Avatar className="w-full h-48 rounded-none">
                      {speakerImage && (
                        <AvatarImage
                          src={speakerImage.imageUrl}
                          alt={`Portrait of ${speaker.name}`}
                          data-ai-hint={speakerImage.imageHint}
                          className="object-cover"
                        />
                      )}
                      <AvatarFallback className="text-2xl rounded-none">{speaker.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-semibold">{speaker.name}</CardTitle>
                    <p className="text-accent font-medium mt-1">{speaker.title}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 md:py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Why Rainwater Harvesting?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Embracing rainwater harvesting is a crucial step towards a sustainable and water-secure future.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {infoCards.map((card) => (
                <Card key={card.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                      {card.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl font-semibold">{card.title}</CardTitle>
                    <p className="mt-2 text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
