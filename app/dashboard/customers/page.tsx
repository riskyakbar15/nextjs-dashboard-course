import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page() {
  const customers = await fetchFilteredCustomers("");

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <CustomersTable customers={customers} />
      </Suspense>
    </main>
  );
}
