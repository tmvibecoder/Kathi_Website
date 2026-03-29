"use client";

import { useRef, useEffect, useCallback } from "react";
import SignaturePadLib from "signature_pad";

interface SignaturePadProps {
  onSignatureChange: (dataUrl: string | null) => void;
}

export function SignaturePad({ onSignatureChange }: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const padRef = useRef<SignaturePadLib | null>(null);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(ratio, ratio);
    }

    if (padRef.current) {
      padRef.current.clear();
      onSignatureChange(null);
    }
  }, [onSignatureChange]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    padRef.current = new SignaturePadLib(canvas, {
      backgroundColor: "rgb(255, 255, 255)",
      penColor: "rgb(30, 30, 30)",
    });

    padRef.current.addEventListener("endStroke", () => {
      if (padRef.current && !padRef.current.isEmpty()) {
        onSignatureChange(padRef.current.toDataURL("image/png"));
      }
    });

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (padRef.current) {
        padRef.current.off();
      }
    };
  }, [resizeCanvas, onSignatureChange]);

  const handleClear = () => {
    if (padRef.current) {
      padRef.current.clear();
      onSignatureChange(null);
    }
  };

  return (
    <div>
      <div className="border border-[var(--color-warm-300)] bg-white">
        <canvas
          ref={canvasRef}
          className="w-full touch-none"
          style={{ height: "150px" }}
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-xs text-[var(--color-warm-500)]">
          Bitte unterschreiben Sie mit Maus oder Finger
        </p>
        <button
          type="button"
          onClick={handleClear}
          className="text-xs text-[var(--color-rose-600)] hover:text-[var(--color-rose-700)] underline underline-offset-2"
        >
          Löschen
        </button>
      </div>
    </div>
  );
}
