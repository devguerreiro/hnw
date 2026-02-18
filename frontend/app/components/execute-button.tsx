"use client";

import { useTransition } from "react";

import { LoaderCircleIcon, PlayIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useDisableButtons } from "@/hooks/use-disable-buttons";

type Decrypted = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

type Props = {
  onFinish: (decrypted: Decrypted[]) => void;
};

export function ExecuteButton({ onFinish }: Props) {
  const { exec, undo } = useDisableButtons();

  const [isPending, startTransition] = useTransition();

  function execute() {
    startTransition(async () => {
      exec();

      const response = await fetch("/api/decrypt");

      if (response.ok) {
        const data = (await response.json()) as Decrypted[];

        undo();

        onFinish(data);
      }
    });
  }

  return (
    <Button onClick={execute}>
      {isPending ? (
        <>
          <LoaderCircleIcon className="animate-spin" />
          Executing
        </>
      ) : (
        <>
          <PlayIcon />
          Execute
        </>
      )}
    </Button>
  );
}
