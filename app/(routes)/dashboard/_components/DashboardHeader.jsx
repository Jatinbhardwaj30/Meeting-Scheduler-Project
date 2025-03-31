"use client"
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { ChevronDown, LogOut, Settings, User} from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function DashboardHeader() {
    const { user } = useKindeBrowserClient();
    
    return user && (
        <div className='p-4 px-15'>
            <div >
                <DropdownMenu>
                    <DropdownMenuTrigger className='flex items-center float-right'>
                        <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAACUCAMAAAATdsOFAAAAbFBMVEX///8WFhgAAAD8/PwYGBoTExUXFhr5+fkNDQ/m5ubZ2dn29vbg4OD///zy8vLq6updXV5PT0/CwsJ9fX6VlZXLy8sAAAa3t7glJSU8PDx0dHTR0dEdHR0sLCwzMzOoqKiJiYloaGlDQ0Ofn5/b2GseAAAL/0lEQVR4nO1c54KiMBDGgUhAl94VQXj/d7xUdN2EIrB7P/yu7J1i8jlMJtOCYXzwwQcffPDBB/8RTNNkf6veGd7+L2E+WNue75wZHN+z5fvkgr/iNgVKzPbcPGmrexAKBPeqTXKXfYH/ljnhHbXBrUYAkFFgzH6Q/6L6FrSRPT3C74LrgemnSQGUJUKHHyAv0veKJPXNb5r19yC8QwzYsg4K3oL9wbLIJSFh/9dsn+D29ytkSE/7QR9lcL337l8zFji3Jc7w8SjZaWkzHI/k4rI9/yllprTGuSJagAZ2RwaEsViiGf0X4q8O9BH5SHWWI/wNdcNtMXyXLcYAuCg7ahUJiI3syoK+hr/fD8Cta/wddb8pAD/RIcsQrmHV9vnFpVsRAdma3Evet1V4JfStp4sxFI3/V5Y+CiA7PnMBK27Ss6e61junTWzB8zc9ZhBEv82ZWeVTVWRIrr8j4WFVqX8akaJ58tPKIt/2KBctyorqZKi9np1AZ7rcgFjqQeDXIPeMCdWlb3p5cB1ET3YBuF2mPrYlyERej8F6aEoZpwbzDMep8/fTuHzojQW4936NO5nfj9EwOYJrcuFTT3iG8m3zklxhsDcYxf5vqAyf3Q0BHcUGAxC7i90q240BxCZ2RBC6bOBd6ZvM1TrXIHUVQ0f8waUyI9fbUUe0Rugc1Iz7vqKno0dFJpnDrbffERf9iN3fYOB+jXa3M2T0vJZqjumdZotvsdTZR4jeDUPV+Z5rlXsc+S2T010TZ92ITnKV3LNbvqtPQ8ZNkdSWzGpU8bOMrZ2oSQiayJERterqhgwjuKN0R+Jk4IslxQQ3Vz0V4ejndxYUcaB77qvXA1Wam3TfsHXZS98Z80FbIPBVE9HdKo0PQI2n8BKI8YNDnKr2Hfp5P4BBZ3bjTnSTTGMRRhaCu2P8mIclBNKKeJNH6/gE60i8xCr9mRJgn3fugIjSkD8QrFw7etgx3wPJJIS5UoZeUn9zgwdgqBNPfZ8Id24kEcT75AxMo5e3FkJPpbu2cQ6wPsDDwdlQUDMNLxwG7vdZqRfhd1gQnNRbX0Q8dl1wSl4GULjndKBTAJaQ+2UP5k4olih0jjKTYuYATJ20AMhVakZ0phNyz8Kt1Z3uFTEw0VlQX5Qm2syvSi3/pvHXXJlMNS618KEh3nhfIvNFNWbGhcyuGJvo8KWEEYEfhK6VF+OnwtNN+oqZmcF1tLWBJHaRBkXELLaGUixOSO3EKHn6Nqg0gg7XUhNJw6aNLSSzLmwlZYGvXqJCn8ZB12qsGJ5GL4FcShtbmbPQY4w1ObcURhh/A6TqEVwsprhumxmL5SpKVO8S5zucTz201WJN+BCW6r68j7PYIulepGJu5DCpLBIINK653JkwbCn2uxgUqZY/tWbBtHWRIDuayv5RIyZidbhvRJs6jDVN96MDtCfVBdRyzhY6GUdn/04t0IWMUH3ZyrabLV/8+HZRB6JmonddFNRxoo5RiE/NxZ61W9kYt2MjEpOuqaT49/mqTse5q+oa1CNo+Ti426p20PABUZFqbqOU1kzgm9rJMo204DNBsw1zGcfojBZR9SVCp8winSrHYqpgm3pTioUodHfR7GcbdQ7odbrsihuMNfvWQoitAjrdBXa7lHqrjYaE96ve+pbC7rh9IfqnkdUpXko9VhlZg+pew4fKutWhni28E0TWliIc3Z66Q1Y81Rnq6axkbxqtXKTakbajzkJ3fkm7clOin675KqVx5S9InVgregXCtbFuR6XpCeG+3Fxt9LLdMiUzuGKPgPW1jlzcwEpZmKP4esc4fulG8yoxYb6Ot2EIVUdYa4qNr3e2JC11sxcK2q5lfuJJIVToK5xfxLNc5ggQz1BL3YiYM4DwXbuUZ8IPGasxh+jrKeU5C3Sb11MXzh4O1/kCX9KzglEZ2O0yqes3U4ITj2t0Ptp86vmVa16lv8iUN3kmmPKNGA++TtF13Tr9MnrgmjfmU9Ck4QKxY5qyHBkuEdFBv5I6973QYUQElAZ1PWZFpxZzhkalnvPmsbUemNworxNO6KnLRhk/IesmTEd6ZdeNeAuzIDeIYiriyufnYaZ02C34dfpNcBZ8vtxRPZEINMXimsG8mtrfHZ5eUEewC6jzTCC+TQ4zpMgnmHeT2VCf2+NsZZDn8M0Gl9M3L5oTW+PbdN+RV/KtZGXK1xFSn1paNBPRYDRhZCyEm+nO0lMnpL4R9cmIxR6SHnqwJMX0SBtTnyF1YmYOo/oOh3xOP+9mUp+p6zyhF4V6wSMII12vwDdspOvCJ5xhYXht4hyznrAXnbdYj1d8ntetIyzM2jSSf2cKM2nXBXnaIdDBT8kjgE7ZJaCCsOvZSrsudlM0uZsaQzeLHYUIMHoCBhRG9uOKCbiFcFbX7aae8GGKuYk0Rs1tw7KgXbK0F7YoQ9a9OztIToUjEK+iPniO1jzn2WZtO/RfbtQkbRy3SRMNvE0m+clvkFtbeI5foqWBRNXjF1JWp4hw7c+GNDemadtPh3rOPfkm0Ul8vxHIuHqtv57zYuhUVY2QzQN6VAPfGvvx4kNJaH8dPawR5JPWMV50o/XUUxmbjm+C5qWknUcEGG6983Kx7RDimPXkA5SXcer2nZXU8G1tntqR8bnaxPCuP9O9wyPUIMuzalyHn6SyPcdtqufm7wzurjnSAOzKHMTagjvLwyBWdVNTp5Fp030z5RaRbR1WbdL3SVuFNcA3vwxB19h6h4BWAxFt/Fmbh5HZL6Sp7tDqfoWyl+0THXAmG+4y/No7YGWo0ncgN2ij7JfM1atLpox5x9rrnslb1uG5bY03RjzuCW3C63TcTzIpvrISRpv56KJBByjdn8rJO3wX5ko5oIgUHg15xS0z3jHkry/7FlzZf1bdmLZG5VvMCfcyUhyF5NVAqurFStp0rKHM8LN5aAXzgfsL7KGIslbmNi0zMI3JuteTOGRe7zC/reEVFly9n02efif0JVpdSyIemCwzvGqMaTjvy5zL/bWyZop6DNmQ1rmNYrihgvx6CxfXkH5wf01wmcZQGd+kwSEVFWR43d4aa1Ex4yeQ9WoBHTnXNtVqJ1TXA0UOfw1eKg6PSudGnZqmqLSj8vy8rMwK5iV39bBIKPQ0IAltS7GuVB0z7+Byw9L5H44WUT1aSZyRh+GsAB1aBDZrKxoS5lBBprdXcCc/5uUYpwDdY8RBBWllfCOxRwU/603u4zDi/Kz0BPchojC5ZpKpRsqFiyFMFn50ItvLinYj1AOx85hDDTMLtmMu7SMJlqTY0yU9dmNAtbCDpilaEreyjAJ32V2aC7G3ywrUI9SFY24OKghbCv254ZYb3PP8RtgpQMibSR3ZNqxt1HoPpmy+oDkp3m6+FXXREC+rVgfYrMlRgEYArH89a2jWJVm9HUmQbSmhmZkmY/3rh6zcWOgmDRn5qQEaYPshrPVfJJAFtBuAHkqg/6FB8KanBshYdiXPapCNyYUZT5mYSZ11IbodjwqIQtrbntVgp+WEf0EsgJdupi9MY1JP7hK41JzsWwdpvCyIl3ZMjQNa2dm/Re+REpWcAF830hYOJM2VNdYAsgqbbf4KsFTN4BRsDerZ7cedMmee6R7MTWbC9mPOzO5uZ2XNBcdJlgLBdOp9BfkZFen3mTdz62RvESe/e2sXncFWvxPtB32z387zemJ+7fd+FBt9ZESzvdyx1Sx/fMVy6jQmmN3oNQ8Zi2B2f/AE/RUdtlysCA6RsfuTSjh9kx3/Pk6TmoMjOy7+S48UorP4bfZaP3oPVpa1vrGzcflO/pQXc7syR3jTwkx++tXHOLHCeQdLTt6pgDB0Z0NRU9odTal+UsMssNJ1udGBtaUgnmRsvW9qEFjtXz1hkDoGUYXfS/hagKtoL5dlDnXD8KIQ3nDiAcLIGwb5M6QBsLYLoQdaBeE/WPMGBJumFVcgjTva7jXrKZoYUBf/L8SZpWyqMpvz7NKsrJqz8deKIsGtsueyhx7qzSXtYrPixv0PVPwnTr7b32vRSYIQOrLfSPSX1Pfe9Vf3uOyJk5MmVdDd6rpgqOtbF1RJ6vzXrJ9c7pN/di8M7nkQ9X/9TGrT1Hgk+nc++OCDDz744IMP3sA/Y4KbaPEN02IAAAAASUVORK5CYII=" alt='logo'
                            width={40}
                            height={40}
                            className='rounded-full'
                        />
                        <ChevronDown />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><User/>Profile</DropdownMenuItem>
                        <DropdownMenuItem><Settings/>Settings</DropdownMenuItem>

                        <DropdownMenuItem>
                            <LogoutLink><LogOut/>Logout</LogoutLink>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    )
}

export default DashboardHeader