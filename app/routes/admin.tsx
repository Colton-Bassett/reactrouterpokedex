import {
  deleteAllPokemonFromDB,
  fetchAllPokemonFromDB,
  fetchAndSavePokemonToDB,
  fetchPokemonFromAPI,
  Pokemon,
} from "~/actions/actions";
import type { Route } from "./+types/admin";
import { Form } from "react-router";

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Router Pokedex - Admin Page" },
    { name: "description", content: "Admin page for React Router v7 Pokedex" },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const actionType = (await request.formData()).get("formId");

  switch (actionType) {
    case "fetch":
      const fetchActionData: { success: boolean; pokemonList: Pokemon[] | [] } =
        await fetchAllPokemonFromDB();
      console.log(fetchActionData);
      return {
        success: fetchActionData.success,
        pokemonCount: fetchActionData.pokemonList.length,
      };
    case "save":
      const saveActionData: { success: boolean; pokemonCount: number } =
        await fetchAndSavePokemonToDB();
      console.log(saveActionData);
      return saveActionData;
    case "delete":
      const deleteActionData: { success: boolean; pokemonCount: number } =
        await deleteAllPokemonFromDB();
      console.log(deleteActionData);
      return deleteActionData;
    default:
      console.log("admin action error");
      return;
  }
}

export default function Admin({ actionData }: Route.ComponentProps) {
  let [isOpen, setIsOpen] = useState(true);
  return (
    <div className="min-h-screen text-[rgba(255,255,245,0.86)]">
      <div className="flex flex-col items-center px-12">
        <div className="mb-28 mt-14 flex min-w-full flex-col px-6 sm:px-8">
          <h1 className="mb-6 text-center text-4xl font-bold sm:text-5xl">
            Admin Page
          </h1>
          <span className="text-center text-[#a9a9a9]">
            Admin permissions are required to perform the actions below
          </span>
        </div>
        <div className="mb-28 flex flex-wrap justify-center gap-6">
          <div className="flex min-w-64 max-w-64 flex-col sm:min-w-72 sm:max-w-72">
            <div className="flex min-h-[294px] flex-col rounded-tl-xl rounded-tr-xl border-b border-[#101010] bg-[#202127] px-6 py-10">
              <span className="mb-4 text-2xl">Fetch Pokemon</span>
              <span className="text-[#a9a9a9]">
                Fetch and log all pokemon in console (debugging)
              </span>
            </div>
            <Form method="post">
              <input name="formId" hidden defaultValue="fetch" />
              <Button
                type="submit"
                onClick={() => setIsOpen(true)}
                className="transition-color transition-bg w-full rounded-bl-xl rounded-br-xl bg-[#202127] p-4 duration-200 hover:bg-[#db2777]"
              >
                Fetch
              </Button>
            </Form>
          </div>
          <div className="flex min-w-64 max-w-64 flex-col sm:min-w-72 sm:max-w-72">
            <div className="flex min-h-[294px] flex-col rounded-tl-xl rounded-tr-xl border-b border-[#101010] bg-[#202127] px-6 py-10">
              <span className="mb-4 text-2xl">Save Pokemon</span>
              <span className="text-[#a9a9a9]">
                Fetch and save all pokemon to database
              </span>
            </div>
            <Form method="post">
              <input name="formId" hidden defaultValue="save" />
              <Button
                type="submit"
                onClick={() => setIsOpen(true)}
                className="transition-color transition-bg w-full rounded-bl-xl rounded-br-xl bg-[#202127] p-4 duration-200 hover:bg-[#db2777]"
              >
                Save
              </Button>
            </Form>
          </div>
          <div className="flex min-w-64 max-w-64 flex-col sm:min-w-72 sm:max-w-72">
            <div className="flex min-h-[294px] flex-col rounded-tl-xl rounded-tr-xl border-b border-[#101010] bg-[#202127] px-6 py-10">
              <span className="mb-4 text-2xl">Delete Pokemon</span>
              <span className="text-[#a9a9a9]">
                Delete all pokemon from database
              </span>
            </div>
            <Form method="post">
              <input name="formId" hidden defaultValue="delete" />
              <Button
                type="submit"
                onClick={() => setIsOpen(true)}
                className="transition-color transition-bg w-full rounded-bl-xl rounded-br-xl bg-[#202127] p-4 text-[#db2777] duration-200 hover:bg-[#db2777] hover:text-[rgba(255,255,245,0.86)]"
              >
                Delete
              </Button>
            </Form>
          </div>
          {actionData ? (
            <ActionResultModal
              success={actionData.success}
              pokemonCount={actionData.pokemonCount}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            ></ActionResultModal>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function ActionResultModal({
  success,
  pokemonCount,
  isOpen,
  setIsOpen,
}: {
  success: boolean;
  pokemonCount: number;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl border-[1px] border-[#646cff] bg-[rgba(100,108,255,.08)] p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-[rgba(255,255,245,0.86)]"
              >
                {success
                  ? " Pokemon API action successful"
                  : " Pokemon API action failed"}
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-[#a9a9a9]">
                {success
                  ? `Your API action has completed successfully. You fetched or deleted ${pokemonCount} pokemon`
                  : "Your API action has failed, possible PokeAPI issue"}
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-[rgba(255,255,245,0.86)] shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
