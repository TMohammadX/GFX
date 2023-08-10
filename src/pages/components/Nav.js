import Link from "next/link";

export default function () {
  return (
    <div className="flex h-[5rem] w-screen justify-between items-center px-[5%] absolute z-50">
      <h1 className="text-2xl">GFX STUDIO</h1>
      <div className="flex gap-5 font-sans font-medium">
        <Link href="/about" className="text-xs">
          ABOUT
        </Link>
        <Link href="/services" className="text-xs">
          SERVICES
        </Link>
        <Link href="/projects" className="text-xs">
          PROJECTS
        </Link>
        <Link href="/team" className="text-xs">
          THE TEAM
        </Link>
        <Link href="/contact" className="text-xs">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
