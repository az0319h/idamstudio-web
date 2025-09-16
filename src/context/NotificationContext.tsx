"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { IoNotificationsCircle } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

type NotificationType = {
   message: string;
   success: boolean;
};

interface NotificationContextProps {
   showNotification: (message: string, success: boolean) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(
   undefined,
);

export function NotificationProvider({ children }: { children: ReactNode }) {
   const [notification, setNotification] = useState<NotificationType | null>(
      null,
   );

   const showNotification = (message: string, success: boolean) => {
      setNotification({ message, success });

      // 7초 후 자동 제거
      setTimeout(() => setNotification(null), 7000);
   };

   return (
      <NotificationContext.Provider value={{ showNotification }}>
         {children}
         <AnimatePresence mode="wait">
            {notification && (
               <motion.div
                  key="notification"
                  initial={{
                     clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                     opacity: 0,
                  }}
                  animate={{
                     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                     opacity: 1,
                  }}
                  exit={{
                     clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                     opacity: 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`text-16-regular md:text-18-regular fixed right-0 bottom-4 z-50 mx-4 flex max-w-125 items-center gap-4 p-4 break-keep text-white shadow ${notification.success ? "bg-black" : "bg-red-500"}`}
               >
                  <IoNotificationsCircle className="size-7 sm:size-8" />
                  <span className="flex-1">{notification.message}</span>
               </motion.div>
            )}
         </AnimatePresence>
      </NotificationContext.Provider>
   );
}

export function useNotification() {
   const context = useContext(NotificationContext);
   if (!context) {
      throw new Error(
         "useNotification must be used within a NotificationProvider",
      );
   }
   return context;
}
