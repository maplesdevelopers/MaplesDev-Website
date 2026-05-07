import type { MenuLinksProps } from './interfaces';
import { SubLinksBox } from './LinkSubItems';

export const MenuLinks = ({ menuLinks, logo }: MenuLinksProps) => {
    return (
        <div className="flex items-center gap-12">
            <ul className="flex items-center px-1 lg:px-4 pt-1.5 gap-4">
                {menuLinks.slice(0, 2).map((link) => (
                    <li className="relative group flex items-center" key={link.name}>
                        <button className="p-2 font-semibold font-[brick] rounded-lg cursor-pointer lg:px-4 text-slate-500 hover:text-slate-700 hover-bg-slate-200">
                            {link.name}
                        </button>
                        <div className="hidden group-hover:block">
                            <SubLinksBox
                                subLinks={link.subLinks}
                                extraLinks={link.extraLinks}
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex items-center justify-center">
                {logo}
            </div>
            <ul className="flex px-1 items-center text-right pt-1.5 gap-4">
                {menuLinks.slice(2, 4).map((link) => (
                    <li className="relative group flex items-center" key={link.name}>
                        <button className="p-2 font-semibold font-[brick] rounded-lg cursor-pointer lg:px-4 text-slate-500 hover:text-slate-700 hover-bg-slate-200">
                            {link.name}
                        </button>
                        <div className="hidden group-hover:block">
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