"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import {Table} from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TextAlign from "@tiptap/extension-text-align";

import {
  Undo2,
  Redo2,
  List,
  ListOrdered,
  AlignLeft,
  AlignRight,
  ImageIcon,
  TableIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface Props {
  content: string;
}

export function ProductDescriptionEditor({
  content,
}: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content,
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <div className="rounded-md border">
      <div className="flex flex-wrap gap-1 border-b p-2">
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() =>
            editor.chain().focus().undo().run()
          }
        >
          <Undo2 className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() =>
            editor.chain().focus().redo().run()
          }
        >
          <Redo2 className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleBulletList()
              .run()
          }
        >
          <List className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleOrderedList()
              .run()
          }
        >
          <ListOrdered className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() =>
            editor
              .chain()
              .focus()
              .setTextAlign("left")
              .run()
          }
        >
          <AlignLeft className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() =>
            editor
              .chain()
              .focus()
              .setTextAlign("right")
              .run()
          }
        >
          <AlignRight className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => {
            const url = window.prompt(
              "Image URL"
            );

            if (url) {
              editor
                .chain()
                .focus()
                .setImage({ src: url })
                .run();
            }
          }}
        >
          <ImageIcon className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() =>
            editor
              .chain()
              .focus()
              .insertTable({
                rows: 3,
                cols: 3,
                withHeaderRow: true,
              })
              .run()
          }
        >
          <TableIcon className="h-4 w-4" />
        </Button>
      </div>

      <EditorContent
        editor={editor}
        className="min-h-[220px] p-4"
      />
    </div>
  );
}