
import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-16">
      <Header />
      <Hero />
      <Footer />    
    </main>
  );
}
