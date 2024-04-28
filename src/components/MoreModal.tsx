import { Bars3Icon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";
import ThemeSwitcher from "./common/ThemeSwitcher";

export default function MoreModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <li className="list" onClick={onOpen}>
        <span>
          <Bars3Icon className="icon-size" />
        </span>
        <span className="list-item-text">More</span>
      </li>
      <Modal
        className="absolute bottom-0 left-0 w-60 py-10 px-4"
        size="xs"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ThemeSwitcher />
        </ModalContent>
      </Modal>
    </>
  );
}
