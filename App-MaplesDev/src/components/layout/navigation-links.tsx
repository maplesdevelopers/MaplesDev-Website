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
        name: "PROJECTS",
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
        name: "LEADERSHIP",
        subLinks: [],    
    },
    { 
        name: "RESOURCES",
            subLinks: [
                {
                    name: "BLOG",
                    description: "",
                    link: "/blog",
                    color: "bg-teal-300",
                    icon: <DocumentTextIcon />
                },
            ],
    },
    { 
        name: "JOIN_US",
            subLinks: [],
    },
  ];
  