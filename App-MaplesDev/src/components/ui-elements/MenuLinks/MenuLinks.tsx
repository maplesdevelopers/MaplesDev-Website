import type { MenuLinksProps } from './interfaces';
import { SubLinksBox } from './LinkSubItems';

export const MenuLinks = ({ menuLinks, logo }: MenuLinksProps) => {
    return (
        <div className="grid grid-cols-3 items-center w-full">
            <ul className="flex items-center justify-start px-1 lg:px-4 pt-1.5 gap-4">
                {menuLinks.slice(0, 2).map((link) => (
                    <li className="relative group flex items-center" key={link.name}>
                        <button className="p-2 lg:px-4 font-semibold font-[brick] rounded-lg cursor-pointer text-slate-500 hover:text-slate-700 hover-bg-slate-200 transition-colors">
                            {link.name}
                        </button>
                        <div className="hidden group-hover:block absolute top-full left-0 z-50">
                            <SubLinksBox
                                subLinks={link.subLinks}
                                extraLinks={link.extraLinks}
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center">
                {logo}
            </div>
            <ul className="flex px-1 items-center justify-end pt-1.5 gap-4 lg:px-4">
                {menuLinks.slice(2, 4).map((link) => (
                    <li className="relative group flex items-center" key={link.name}>
                        <button className="p-2 font-semibold font-[brick] rounded-lg cursor-pointer lg:px-4 text-slate-500 hover:text-slate-700 hover-bg-slate-200">
                            {link.name}
                        </button>
                        <div className="hidden group-hover:block absolute top-full right-0 z-50">
                            <SubLinksBox
                                subLinks={link.subLinks}
                                extraLinks={link.extraLinks}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};