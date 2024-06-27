import { Dock, DockIcon } from '@/components/atasui/ui/dock-motion';
import { useTranslations } from 'next-intl';
import { SiVercel } from "react-icons/si";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function DockMenu() {
    const t = useTranslations('Dock');
    
    return (
        <Dock className="flex items-center space-x-2">
           <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Deploy
          </span>
          <DockIcon link="https://vercel.com/new/clone?repository-url=https://github.com/ATASTECH/Atas-Starter-Kit.git">
            <Icons.Vercel className="h-8 w-8" />
          </DockIcon>
        </Dock>
    );
}

const Icons = {
    Vercel: (props: IconProps) => (
      <SiVercel size={28} />
    ),
};
