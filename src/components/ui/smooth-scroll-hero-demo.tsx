import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";

const DemoOne = () => {
  return (
    <div className="relative min-h-screen">
      <SmoothScrollHero
        scrollHeight={1500}
        desktopImage="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1920&q=80"
        mobileImage="https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop"
        initialClipPercentage={25}
        finalClipPercentage={75}
      />
    </div>
  );
};

export { DemoOne };
