import React, { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import 'react-spring-bottom-sheet/dist/style.css'

import "./BottomSheetCp.module.scss";

export const BottomSheetCp = () => {
	const [open, setOpen] = useState<boolean>(true);

  return (
    <p>
			<button
				onClick={() => setOpen(open => !open)}
			>
        {open ? "Close" : "Open"}
      </button>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        blocking={true}
        header={
          <div>
            <p>Hello world</p>
						<button
							onClick={() => setOpen(false)}
						>close</button>
					</div>
        }
        snapPoints={({ maxHeight }) => [maxHeight / 4, maxHeight * 0.5]}
      >
        <p>
          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.
          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.
        </p>
        <p>You can combine this wito fine-tune the behavior you want.</p>
      </BottomSheet>
    </p>
  );
};


