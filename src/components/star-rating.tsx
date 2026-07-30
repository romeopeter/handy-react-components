import { StarIcon } from "@phosphor-icons/react";

/* ------------------------------------------------------------------ */

interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
  size?: number;
}

export default function StarRating({
  value,
  onChange,
  readOnly = false,
  size = 22,
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readOnly}
          onClick={() => onChange?.(star)}
          className={readOnly ? "cursor-default" : "cursor-pointer"}
          title={`${star} star${star > 1 ? "s" : ""}`}
        >
          <StarIcon
            size={size}
            weight={star <= value ? "fill" : "regular"}
            className={star <= value ? "text-[#FF9800]" : "text-neutral-300"}
          />
        </button>
      ))}
    </div>
  );
}
