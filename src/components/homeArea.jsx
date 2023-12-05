import React from "react";
import { Card, CardBody, Image, CardHeader } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue } from "@nextui-org/react";
import { users } from "../utils/users_data";

import Link from "next/link";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


export default function HomeArea({ selectedCategory }) {

  const supabase = createClientComponentClient();

  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    console.log("DB Request");

    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("ctf").select("*").eq("category", selectedCategory);
        console.log("Get CTF By Category: (error):\n", error);
        console.log("Get CTF By Category: (data):\n", data);

        if (data) {
          setList(
            data.map((item) => ({
              id: item.id,
              title: item.title,
              description: item.description,
              score: item.score,
              difficulty: item.difficulty,
              flag_format: item.flag_format,
              challenge_link: item.challenge_link,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function
      // Perform any necessary cleanup here
      // For example, cancel any pending requests or subscriptions
      // This function will be called when the component unmounts
      console.log("Component unmounted");
    };
  }, [selectedCategory]);

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);


  return (
    <>

      <section>
        <div className="w-full h-full px-4 sm:px-8 md:px-16 py-2 sm:py-4 md:py-8 bg-[#2D3250]">
          <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {list.map((item, index) => (
              <Link href={`/challenge/${item.id}`} className="w-full">
                <Card
                  className="bg-[#1e243a] hover:bg-[#12172a] shadow-2xl"
                  radius="sm"
                  shadow="lg"
                  key={index}
                  isPressable
                // onPress={() => console.log("item pressed")}
                >
                  {/* <CardBody className="overflow-visible p-0">

                </CardBody> */}
                  <CardHeader className="flex gap-3 bg-[#1e243a]">
                    <Image
                      alt="nextui logo"
                      height={40}
                      color="primary"
                      radius="sm"
                      src="https://img.icons8.com/ios/50/flag.png"
                      width={40}
                    />
                    <div className="flex flex-col">
                      <p className="text-small text-gray-400">{item.difficulty}</p>
                    </div>
                  </CardHeader>
                  <CardBody className="text-lg justify-between">
                    <div className="flex flex-col w-full">
                      <div className="flex flex-row justify-between">
                        <b className="text-yellow-400">{item.title}</b>
                        {/* <p className="text-default-500">{item.no_of_qs}</p> */}
                        <div class="relative flex items-center justify-center">
                          <div class="absolute h-6 w-6 bg-primary-500 rounded-full"></div>
                          <p class="text-default-200 text-[12px] z-10">{item.score}</p>
                        </div>
                      </div>
                      {/* <div className="flex flex-row justify-between"> */}
                      <span className="text-[12px] text-slate-400">{item.description}</span>
                      {/* </div> */}
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full grid grid-cols-2 px-4 sm:px-8 md:px-16 py-4 sm:py-8 md:py-12 bg-[#2D3250]">
        {/* First Column */}
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3 bg-yellow-400">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://img.icons8.com/ios/50/clipboard.png"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Notice Board</p>
              <p className="text-small text-default-500">1 Unread Notification</p>
            </div>
          </CardHeader>
          <CardBody className="bg-[#1e243a]">
            <p className="text-white">Welcome to the CTF Challenger!<br /><br />Get ready for an exciting journey into the world of cybersecurity. Sharpen your skills, think outside the box, and may the flags be ever in your favor!</p>
          </CardBody>
        </Card>

        {/* Second Column - Duplicate of the First Column */}
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3 bg-primary-300">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://img.icons8.com/ios/50/conference-call--v1.png"
              width={40}
            />
            <div className="flex">
              <p className="text-md">Your Team</p>
            </div>
          </CardHeader>

          <CardBody className="bg-[#1e243a]">
            <Table
              removeWrapper
              aria-label="Example table with client side pagination"
              bottomContent={
                <div className="flex w-full justify-center">
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                  />
                </div>
              }
              classNames={{

                wrapper: "min-h-[222px]",
                table: "text-white",
              }}
            >
              <TableHeader>
                <TableColumn key="ctf_team_name">NAME</TableColumn>
                <TableColumn key="score">SCORE</TableColumn>
                <TableColumn key="finished_position">FINISHED</TableColumn>
              </TableHeader>
              <TableBody items={items}>
                {(item) => (
                  <TableRow key={item.ctf_team_name}>
                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </section>

    </>

  );
}
