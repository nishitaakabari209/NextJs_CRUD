// import { PrismaClient } from "@/generated/prisma";
// import Link from "next/link";

// const PrismaGetAll = async () => {
//   const prisma = new PrismaClient();
//   const data = await prisma.user.findMany();
// console.log(data);
//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-2">Users</h2>
//       <ul className="list-disc pl-6">
//         {data.map((user: any) => (
//           <div key={user.id}>
//             <li className="mb-2">
//               <span className="font-semibold">{user.UserName}</span>{" "}
//               <span>{user.UserEmail}</span>{" "}
//               <span>{user.age}</span>
//               <span>{user.phone}</span>

//             </li>
//             <Link href={`/prismacrud/${user.id}`}>
//               <button className="btn btn-outline-primary">View Profile</button>
//             </Link>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PrismaGetAll;
