// unecessary imports
import {
    ClockIcon,
    PaperAirplaneIcon,
    ReceiptRefundIcon,
    DocumentIcon,
    PlusCircleIcon,
    ListBulletIcon,
    DocumentTextIcon,
    CommandLineIcon,
    TicketIcon,
    HeartIcon,
    GiftIcon,
} from '@heroicons/react/24/outline';

export const navigationLinks = [
    {
        name: "Projects",
        subLinks: [
            /* Can add sublinks to a main link
            with these attributes:
            name: "",
            discription: "",
            link: "",
            color: "",
            icon: </> */
        ],
    },
    { 
        name: "Leadership",
        subLinks: [],    
    },
    { 
        name: "Resources",
            subLinks: [
                {
                    name: "Blog",
                    description: "",
                    link: "/blog",
                    color: "bg-teal-300",
                    icon: <DocumentTextIcon />
                },
            ],
    },
    { 
        name: "JoinUs",
            subLinks: [],
    },
  ];
  