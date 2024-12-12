import { useCallback, useState } from "react";

type TDisclosureState = {
  [key: string]: boolean;
};

/**
 * @description handles toggle states for things like modals and popovers
 * @param initialStates
 * @returns
 */
function useDisclosure(initialStates: TDisclosureState) {
  const [isOpen, setIsOpen] = useState<TDisclosureState>(initialStates);

  const onClose = useCallback(
    (key: string) => setIsOpen((prev) => ({ ...prev, [key]: false })),
    [],
  );
  const onOpen = useCallback(
    (key: string) => setIsOpen((prev) => ({ ...prev, [key]: true })),
    [],
  );

  const closeAllModals = useCallback(() => {
    setIsOpen(initialStates);
  }, []);

  return { isOpen, onOpen, onClose, closeAllModals };
}

export default useDisclosure;
