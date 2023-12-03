
// import EventCard from '../components/eventCard';
import React from "react";
import { Card, CardBody, CardFooter, Image, CardHeader, Divider, Link } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue } from "@nextui-org/react";
import { users } from "./data";
const list = [
  {
    title: "WEB",
    img: "/images/fruit-1.jpeg",
    no_of_qs: "12",
  },
  {
    title: "CRYPTO",
    img: "/images/fruit-2.jpeg",
    no_of_qs: "7",
  },
  {
    title: "REVERSE",
    img: "/images/fruit-3.jpeg",
    no_of_qs: "8",
  },
  {
    title: "FORENSICS",
    img: "/images/fruit-4.jpeg",
    no_of_qs: "30",
  },
  // {
  //   title: "MOBILE",
  //   img: "/images/fruit-5.jpeg",
  //   no_of_qs: "10",
  // },
];

export default function HomeArea() {
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
        <div className="w-full px-4 sm:px-8 md:px-16 py-2 sm:py-4 md:py-8 bg-[#2D3250]">
          <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {list.map((item, index) => (
              <Card
                className="bg-[#1e243a] hover:bg-[#12172a] shadow-2xl"
                radius="sm"
                shadow="lg"
                key={index}
                isPressable
                onPress={() => console.log("item pressed")}
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[140px]"
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-lg justify-between">
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between">
                      <b className="text-yellow-400">{item.title}</b>
                      {/* <p className="text-default-500">{item.no_of_qs}</p> */}
                      <div class="relative flex items-center justify-center">
                        <div class="absolute h-6 w-6 bg-primary-500 rounded-full"></div>
                        <p class="text-default-200 text-[12px] z-10">{item.no_of_qs}</p>
                      </div>


                    </div>
                    <div className="flex flex-row justify-between">
                      <span className="text-[12px] text-slate-400">Total Score</span>
                      <span className="text-[12px] text-slate-400">{item.no_of_qs}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
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
              <p className="text-md">Notice</p>
              <p className="text-small text-default-500">122</p>
            </div>
          </CardHeader>
          <CardBody className="bg-[#1e243a]">
            <p className="text-white">Welcome to the CTF Challenge! Get ready for an exciting journey into the world of cybersecurity. Sharpen your skills, think outside the box, and may the flags be ever in your favor!</p>
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
              <p className="text-md">Team</p>
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
