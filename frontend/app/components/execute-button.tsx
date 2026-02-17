"use client";

import { useTransition } from "react";

import { LoaderCircleIcon, PlayIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

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
  const [isPending, startTransition] = useTransition();

  function execute() {
    startTransition(async () => {
      const response = await fetch("/api/decrypt");

      if (response.ok) {
        const data = (await response.json()) as Decrypted[];

        onFinish(data);
      }
    });
  }

  return (
    <Button disabled={isPending} onClick={execute}>
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
