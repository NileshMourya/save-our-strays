"use client";

import { useState } from "react";
import TeamCard from "@/components/TeamCard";
import TeamModal from "@/components/TeamModal";
import styles from "./TeamGrid.module.css";

export default function TeamGrid({ members }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className={styles.grid}>
        {members.map((member) => (
          <TeamCard key={member.slug} member={member} onReadMore={setSelected} />
        ))}
      </div>
      <TeamModal member={selected} onClose={() => setSelected(null)} />
    </>
  );
}
