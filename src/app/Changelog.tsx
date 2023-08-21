"use client";

import React from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { Changelog as ChangelogPrimitive } from "@floe/next";
import type { ChangelogData } from "@floe/next";
import {
  FaceSmileIcon,
  FaceFrownIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import {
  FaceSmileIcon as FaceSmileIconSolid,
  FaceFrownIcon as FaceFrownIconSolid,
  RocketLaunchIcon as RocketLaunchIconSolid,
} from "@heroicons/react/24/solid";

const reactions: {
  type: keyof ChangelogPrimitive.ReactionsProps["reactions"];
  selectedIcon: JSX.Element;
  unselectedIcon: JSX.Element;
}[] = [
  {
    type: "HOORAY",
    selectedIcon: <RocketLaunchIconSolid className="w-5 h-5 text-gray-400" />,
    unselectedIcon: <RocketLaunchIcon className="w-5 h-5 text-gray-400" />,
  },
  {
    type: "THUMBS_UP",
    selectedIcon: <FaceSmileIconSolid className="w-5 h-5 text-gray-400" />,
    unselectedIcon: <FaceSmileIcon className="w-5 h-5 text-gray-400" />,
  },
  {
    type: "THUMBS_DOWN",
    selectedIcon: <FaceFrownIconSolid className="w-5 h-5 text-gray-400" />,
    unselectedIcon: <FaceFrownIcon className="w-5 h-5 text-gray-400" />,
  },
];

const Changelog = ({ changelog }: { changelog: ChangelogData }) => (
  <ChangelogPrimitive.Root changelog={changelog}>
    <div className="relative pb-16 mb-20 border-b last:mb-0 last:pb-0 last:border-0 border-zinc-700">
      {/* DATE */}
      <ChangelogPrimitive.Date className="text-gray-400" />

      {/* IMAGE */}
      <ChangelogPrimitive.Image className="relative w-full h-56 m-0 mt-2 overflow-hidden md:h-96 rounded-xl">
        <ChangelogPrimitive.ImagePlaceholder className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-700 animate-pulse">
          <PhotoIcon className="w-10 h-10 text-gray-400" />
        </ChangelogPrimitive.ImagePlaceholder>
        <ChangelogPrimitive.ImageError className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-700">
          <PhotoIcon className="w-10 h-10 text-gray-400" />
        </ChangelogPrimitive.ImageError>
      </ChangelogPrimitive.Image>

      {/* TITLE */}
      <ChangelogPrimitive.Title />

      {/* CONTENT */}
      <ChangelogPrimitive.Content />

      {/* REACTIONS */}
      <ChangelogPrimitive.Reactions className="flex items-center justify-center">
        {reactions.map(({ type, selectedIcon, unselectedIcon }) => (
          <ChangelogPrimitive.Reaction type={type} key={type}>
            <ChangelogPrimitive.ReactionTrigger className="flex items-center gap-1.5 rounded-lg hover:bg-gray-800 px-2 py-1 cursor-pointer">
              <ChangelogPrimitive.ReactionSelectedIcon>
                {selectedIcon}
              </ChangelogPrimitive.ReactionSelectedIcon>
              <ChangelogPrimitive.ReactionUnselectedIcon>
                {unselectedIcon}
              </ChangelogPrimitive.ReactionUnselectedIcon>
              <ChangelogPrimitive.ReactionCount />
            </ChangelogPrimitive.ReactionTrigger>
          </ChangelogPrimitive.Reaction>
        ))}
      </ChangelogPrimitive.Reactions>
    </div>
  </ChangelogPrimitive.Root>
);

export default Changelog;
