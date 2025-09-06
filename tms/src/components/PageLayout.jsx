import { AuthenticatedTemplate } from "@azure/msal-react";
import { NavigationBar } from "./NavigationBar";
import { Link, useLocation } from "react-router-dom";

export const PageLayout = (props) => {
    const location = useLocation();
    const menuItems = [
        { to: "/dashboard", label: "Dashboard" },
        { to: "/projects", label: "Projects" },
        { to: "/tasks", label: "Tasks" },
        { to: "/calendar", label: "Calendar" },
        { to: "/analysis", label: "Analysis" }
    ];
    return (
        <>
            <NavigationBar />
            <div style={{display:'flex',minHeight:'80vh'}}>
                <div style={{width:220,background:'#f8f9fa',padding:'32px 0 0 0',boxShadow:'2px 0 8px #eee'}}>
                    <nav style={{display:'flex',flexDirection:'column',gap:16}}>
                        {menuItems.map(item => (
                            <Link
                                key={item.to}
                                to={item.to}
                                style={{
                                    padding:'12px 24px',
                                    color: location.pathname === item.to ? '#fff' : '#007bff',
                                    background: location.pathname === item.to ? '#007bff' : 'none',
                                    textDecoration:'none',
                                    fontWeight:'bold',
                                    borderRadius:6,
                                    transition:'background 0.2s'
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div style={{flex:1,padding:'32px 40px'}}>
                    {props.children}
                </div>
            </div>
            <AuthenticatedTemplate>
                <footer>
                    
                </footer>
            </AuthenticatedTemplate>
        </>
    );
}