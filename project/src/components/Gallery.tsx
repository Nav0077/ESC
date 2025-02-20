import { GalleryItem } from '../types';

interface GalleryProps {
  items: GalleryItem[];
}

export function Gallery({ items }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          {item.type === 'image' ? (
            <img 
              src={item.url} 
              alt={item.caption}
              className="w-full h-64 object-cover"
            />
          ) : (
            <div className="relative pt-[56.25%]">
              <iframe
                src={item.url}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          <p className="p-4 text-gray-700">{item.caption}</p>
        </div>
      ))}
    </div>
  );
}