"use client";

import { useTransition } from "react";

import { EraserIcon, LoaderCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useDisableButtons } from "@/hooks/use-disable-buttons";

type Props = {
  onFinish: () => void;
};

export function CleanButton({ onFinish }: Props) {
  const { exec, undo } = useDisableButtons();

  const [isPending, startTransition] = useTransition();

  function clean() {
    startTransition(async () => {
      exec();

      const response = await fetch("/api/clean", { method: "DELETE" });

      if (response.ok) {
        undo();
        onFinish();
      }
    });
  }

  return (
    <Button onClick={clean}>
      {isPending ? (
        <>
          <LoaderCircleIcon className="animate-spin" />
          Cleaning
        </>
      ) : (
        <>
          <EraserIcon />
          Clear
        </>
      )}
    </Button>
  );
}
