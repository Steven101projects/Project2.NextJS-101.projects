import ServicesHeader from '@/components/services-components/ServicesHeader'
import ServicesGrid from '@/components/services-components/ServicesGrid'
import MessageModal from "@/components/services-components/MessageBox";

export default function Services(){

    return (
        <div>
            <ServicesHeader />
                        <MessageModal />
            <ServicesGrid />
        </div>
    )
}