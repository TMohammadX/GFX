import Link from "next/link";

export default function () {
  return (
    <div className="flex h-[5rem] w-screen justify-between items-center px-[5%] absolute z-50">
      <h1 className="text-2xl">GFX STUDIO</h1>
      <div className="flex gap-5">
        <Link href="/about" className="text-sm">
          ABOUT
        </Link>
        <Link href="/services" className="text-sm">
          SERVICES
        </Link>
        <Link href="/projects" className="text-sm">
          PROJECTS
        </Link>
        <Link href="/team" className="text-sm">
          THE TEAM
        </Link>
        <Link href="/contact" className="text-sm">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
